// origin code from https://github.com/lucygilbert/json-display/blob/master/json-display.js
// Copyright (c) 2017 Lucy Gilbert
export default class JsonView{
    constructor(){
    }
    static JSONDisplay(json, openLevelsArg, styleOptionsArg) {
        var DEFAULT_STYLE_OPTIONS = {
          root: { tag: 'pre', style: 'padding: 5px; font-size: 1rem;' },
          titleContainer: { tag: 'div', style: 'margin-bottom: 3px;' },
          title: { tag: 'span', style: 'cursor: pointer;' },
          titleText: { tag: 'span', style: '' },
          openButton: { 
            tag: 'span',
            style: 'display: inline-block; margin: 0px 7px 0px 2px; border-top: 5px solid transparent; '
                 + 'border-bottom: 5px solid transparent; border-left: 5px solid black;',
          },
          contentsContainer: { tag: 'div', style: 'padding-left: 18px;' },
          keyValuePair: { tag: 'span', style: 'display: block; margin-bottom: 2px;' },
          key: { tag: 'span', style: 'color: darkblue;' },
          symbolValue: { tag: 'span', style: 'color: darkgreen;' },
          stringValue: { tag: 'span', style: 'color: crimson;' },
          numberValue: { tag: 'span', style: 'color: blue;' },
          booleanValue: { tag: 'span', style: 'color: blue;' },
          nullValue: { tag: 'span', style: 'color: blue;' },
        };
        var openLevels = isNaN(parseInt(openLevelsArg)) ? Infinity : parseInt(openLevelsArg);
        var styleOptions = typeof styleOptionsArg === 'object' 
                           ? mergeStyleOptions(DEFAULT_STYLE_OPTIONS, styleOptionsArg)
                           : DEFAULT_STYLE_OPTIONS;
    
        if (typeof Object.assign != 'function') {
          Object.assign = function(target) {
            if (target == null) {
              throw new TypeError('Cannot convert undefined or null to object');
            }
    
            var to = Object(target);
    
            for (var index = 1; index < arguments.length; index++) {
              var nextSource = arguments[index];
    
              if (nextSource != null) {
                for (var nextKey in nextSource) {
                  if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }
            }
            return to;
          };
        }
    
        function render() {
          var element = document.createElement(styleOptions.root.tag);
          element.style.cssText = styleOptions.root.style;
    
          if (json === null || json === undefined) {
            var voidElement = getValue(null);
            element.appendChild(voidElement);
          } else if (json instanceof Date) {
            var dateElement = getValue(json.toISOString());
            element.appendChild(dateElement);
          } else if (typeof json !== 'object') {
            var nonExpandableElement = getValue(json);
            element.appendChild(nonExpandableElement);
          } else {
            var title = Array.isArray(json) ? 'Array[' + json.length + ']' : 'Object';
            var thisLevelIsClosed = openLevels < 1;
            element.appendChild(getTitle(title, null, thisLevelIsClosed));
            element.appendChild(convertJsonToElements(json, 1));
          }
    
          return element;
        }
    
        function convertJsonToElements(json, index) {
          var thisLevelIsClosed = index > openLevels;
          var nextLevelIsClosed = index + 1 > openLevels;
          var container = getContentsContainer(thisLevelIsClosed);
          for (var key in json) {
            if (Array.isArray(json[key])) {
              container.appendChild(getTitle('Array[' + json[key].length + ']', key, nextLevelIsClosed));
              container.appendChild(convertJsonToElements(json[key], index + 1));
            } else if (json[key] === null || json[key] === undefined) {
              container.appendChild(getStandardPair(key, null));
            } else if (json[key] instanceof Date) {
              container.appendChild(getStandardPair(key, json[key].toISOString()));
            } else if (typeof json[key] === 'object') {
              container.appendChild(getTitle('Object', key, nextLevelIsClosed));
              container.appendChild(convertJsonToElements(json[key], index + 1));
            } else {
              container.appendChild(getStandardPair(key, json[key]));
            }
          }
          if (typeof Object.getOwnPropertySymbols === 'function') {
            Object.getOwnPropertySymbols(json).forEach(function(symbol) {
              container.appendChild(getStandardPair(symbol.toString(), json[symbol]));
            });
          }
    
          return container;
        }
    
        function getTitle(titleText, optionalKey, levelIsClosed) {
          var currentlyClosed = levelIsClosed;
          var containerElement = document.createElement(styleOptions.titleContainer.tag);
          containerElement.style.cssText = styleOptions.titleContainer.style;
          containerElement.setAttribute('data-test', 'titleContainer');
          var textElement = document.createElement(styleOptions.titleText.tag);
          var titleElement = document.createElement(styleOptions.title.tag);
          titleElement.style.cssText = styleOptions.title.style;
          textElement.style.cssText = styleOptions.titleText.style;
    
          titleElement.appendChild(getOpenButton(levelIsClosed));
          if (optionalKey) {
            textElement.appendChild(getKey(optionalKey));
          }
          textElement.appendChild(document.createTextNode(titleText));
          titleElement.appendChild(textElement);
    
          titleElement.onclick = function () {
            var openButton = titleElement.firstChild;
            var objectContents = titleElement.parentNode.nextSibling;
            objectContents.style.display = currentlyClosed ? 'block' : 'none';
            openButton.style.transform = currentlyClosed ? 'rotate(90deg)' : 'rotate(0deg)';
            currentlyClosed = !currentlyClosed;
          };
    
          containerElement.appendChild(titleElement);
          return containerElement;
        }
    
        function getOpenButton(levelIsClosed) {
          var buttonElement = document.createElement(styleOptions.openButton.tag);
          buttonElement.style.cssText = styleOptions.openButton.style;
          buttonElement.style.transform = levelIsClosed ? 'rotate(0deg)' : 'rotate(90deg)';
          return buttonElement;
        }
    
        function getContentsContainer(isClosed) {
          var containerElement = document.createElement(styleOptions.contentsContainer.tag);
          containerElement.setAttribute('data-test', 'contentsContainer');
          containerElement.style.cssText = styleOptions.contentsContainer.style;
          containerElement.style.display = (isClosed ? 'none' : 'block');
          return containerElement;
        }
    
        function getStandardPair(key, value) {
          var pairElement = document.createElement(styleOptions.keyValuePair.tag);
          pairElement.style.cssText = styleOptions.keyValuePair.style;
          pairElement.appendChild(getKey(key));
          pairElement.appendChild(getValue(value));
          return pairElement;
        }
    
        function getKey(name) {
          var keyElement = document.createElement(styleOptions.key.tag);
          keyElement.style.cssText = styleOptions.key.style;
          keyElement.appendChild(document.createTextNode(name + ': '));
          return keyElement;
        }
    
        function getValue(value) {
          var valueElement;
          var nullType = 'object';
          switch (typeof value) {
            case 'symbol':
              valueElement = document.createElement(styleOptions.symbolValue.tag);
              valueElement.style.cssText = styleOptions.symbolValue.style;
              valueElement.appendChild(document.createTextNode(value.toString()));
              break;
            case 'string':
              valueElement = document.createElement(styleOptions.stringValue.tag);
              valueElement.style.cssText = styleOptions.stringValue.style;
              valueElement.appendChild(document.createTextNode('' + value + ''));
              break;
            case 'number':
              valueElement = document.createElement(styleOptions.numberValue.tag);
              valueElement.style.cssText = styleOptions.numberValue.style;
              valueElement.appendChild(document.createTextNode(value));
              break;
            case 'boolean':
              valueElement = document.createElement(styleOptions.booleanValue.tag);
              valueElement.style.cssText = styleOptions.booleanValue.style;
              valueElement.appendChild(document.createTextNode(value));
              break;
            case nullType:
              valueElement = document.createElement(styleOptions.nullValue.tag);
              valueElement.style.cssText = styleOptions.nullValue.style;
              valueElement.appendChild(document.createTextNode(value));
              break;
          }
          return valueElement;
        }
    
        function mergeStyleOptions(defaults, overrides) {
          var merged = {};
          for (var key in defaults) {
            merged[key] = Object.assign({}, defaults[key], overrides[key]);
          }
          return merged;
        }
    
        return render();
    }
}