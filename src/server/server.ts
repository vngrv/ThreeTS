import http from "http";
import path from "path";
import express from "express";

class App {
  private _server: http.Server;
  private _port: number;

  constructor(port: number) {
    this._port = port;
    const app = express();
    app.use(express.static(path.join(__dirname, '../client')));
    app.use('/build/three.module.js', express.static(path.join(__dirname, '../../node_modules/three/build/three.module.js')));
    app.use('/jsm/controls/OrbitControls', express.static(path.join(__dirname, '../../node_modules/three/examples/jsm/controls/OrbitControls.js')));

    this._server = new http.Server(app);
  }

  public Start() {
    this._server.listen(this._port, () => {
      console.log(`Server listnening on port ${this._port}`);
    });
  }
}

const PORT: number = 3000;

new App(PORT).Start()
