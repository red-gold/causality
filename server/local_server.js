#!/usr/bin/env node
/* this code is original from [simple_server](https://www.npmjs.com/package/simple_server)
/* eslint-disable no-console */
'use strict';

// const cp = require('child_process');
const fs = require('fs');
const http = require('http');

const args = process.argv;
const idx = args.indexOf('-p');

const hostname = '0.0.0.0';
const port = (idx > -1) ? Number(args[idx + 1]) : 8080;

const server = http.createServer((req, res) => {
    // Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}
    const url = req.url;

    // Proceed for everything but favicon.ico.
    if (!~url.indexOf('favicon')) {
        const currentLocation = `${process.cwd()}${url}`;

        fs.stat(currentLocation, (err, stats) => {
            if (err) {
                // TODO: Capture more error codes.
                if (err.errno === -2) {
                    console.log(`404 NOT FOUND ${currentLocation}`);
                }
            } else {
                if (stats.isFile() || true) {
                    fs.readFile(currentLocation, (err, data) => {
                        if (err) {
                            console.log(`ERROR: ${err}`);
                            res.statusCode = 500;
                            res.end('Cannot display file');
                        } else {
                            let contentType = null;

                            switch (true) {
                                case !!~currentLocation.indexOf('css'):
                                    contentType = 'text/css';
                                    break;

                                case !!~currentLocation.indexOf('htm'):
                                    contentType = 'text/html';
                                    break;

                                default:
                                    contentType = 'text/plain';
                            }

                            res.setHeader('Content-Type', contentType);
                            res.end(data);
                        }
                    });
                } else {
                    fs.readdir(currentLocation, (err, files) => {
                        if (err) {
                            console.log(`ERROR: ${err}`);
                            res.statusCode = 500;
                            res.end('Cannot display directory');
                        } else {
                            const entries = [];
                            let html = [
                                `<html><body><h1>Directory listing for ${url}</h1><ul>`
                            ];

                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'text/html');

                            files.forEach(file => {
                                const path = `${currentLocation}${file}` ;
                                const stat = fs.statSync(path);

                                if (stat.isDirectory()) {
                                    entries.push(`${file}/`);
                                } else {
                                    entries.push(file);
                                }
                            });

                            entries.forEach(entry =>
                                html.push(`<li><a href="${entry}">${entry}</a></li>`)
                            );

                            res.end(html.join(''));
                        }
                    });
                }
            }
        });
    }
});

server.listen(port, hostname, () => {
    const url = `http://${hostname}:${port}/`;

    /*
    if (process.platform === 'darwin') {
        cp.exec(`open ${url}`, err => {
            if (err) {
                console.log(`ERROR: ${err}`);
            }
        });
    }
    */

    console.log(`Server running at ${url}`);
});