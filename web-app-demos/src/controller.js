var lodash = require('lodash');
var machina = require('machina')(lodash);
var vehicleSignal = new machina.Fsm( {
 
    initialize: function( options ) {
    },
 
    namespace: "vehicle-signal",
 
    // `initialState` tells machina what state to start the FSM in.
    // The default value is "uninitialized". Not providing
    // this value will throw an exception in v1.0+
    initialState: "uninitialized",
 
    // The states object's top level properties are the
    // states in which the FSM can exist. Each state object
    // contains input handlers for the different inputs
    // handled while in that state.
    states: {
        uninitialized: {
            // Input handlers are usually functions. They can
            // take arguments, too (even though this one doesn't)
            // The "*" handler is special (more on that in a bit)
            "*": function() {
                this.deferUntilTransition();
                // the `transition` method takes a target state (as a string)
                // and transitions to it. You should NEVER directly assign the
                // state property on an FSM. Also - while it's certainly OK to
                // call `transition` externally, you usually end up with the
                // cleanest approach if you endeavor to transition *internally*
                // and just pass input to the FSM.
                this.transition( "green" );
            }
        },
        green: {
            // _onEnter is a special handler that is invoked
            // immediately as the FSM transitions into the new state
            _onEnter: function() {
                this.timer = setTimeout( function() {
                    this.handle( "timeout" );
                }.bind( this ), 30000 );
                this.emit( "vehicles", { status: "GREEN" } );
            },
            // If all you need to do is transition to a new state
            // inside an input handler, you can provide the string
            // name of the state in place of the input handler function.
            timeout: "green-interruptible",
            pedestrianWaiting: function() {
                this.deferUntilTransition( "green-interruptible" );
            },
            // _onExit is a special handler that is invoked just before
            // the FSM leaves the current state and transitions to another
            _onExit: function() {
                clearTimeout( this.timer );
            }
        },
        "green-interruptible": {
            pedestrianWaiting: "yellow"
        },
        yellow: {
            _onEnter: function() {
                this.timer = setTimeout( function() {
                    this.handle( "timeout" );
                }.bind( this ), 5000 );
                // machina FSMs are event emitters. Here we're
                // emitting a custom event and data, etc.
                this.emit( "vehicles", { status: "YELLOW" } );
            },
            timeout: "red",
            _onExit: function() {
                clearTimeout( this.timer );
            }
        },
        red: {
            _onEnter: function() {
                this.timer = setTimeout( function() {
                    this.handle( "timeout" );
                }.bind( this ), 1000 );
                this.emit( "vehicles", { status: "RED" } );
            },
            _reset: "green",
            _onExit: function() {
                clearTimeout(this.timer);
            }
        }
    },
 
    // While you can call the FSM's `handle` method externally, it doesn't
    // make for a terribly expressive API. As a general rule, you wrap calls
    // to `handle` with more semantically meaningful method calls like these:
    reset: function() {
        this.handle( "_reset" );
    },
 
    pedestrianWaiting: function() {
        this.handle( "pedestrianWaiting" );
    }
} );
 
// Now, to use it:
// This call causes the FSM to transition from uninitialized -> green
// & queues up pedestrianWaiting input, which replays after the timeout
// causes a transition to green-interruptible....which immediately
// transitions to yellow since we have a pedestrian waiting. After the
// next timeout, we end up in "red".
vehicleSignal.pedestrianWaiting();
// Once the FSM is in the "red" state, we can reset it to "green" by calling:
vehicleSignal.reset();
export default vehicleSignal