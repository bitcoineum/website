import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  pdfUrl: string = 'http://www.bitcoineum.com/assets/Bitcoineum.pdf';
  mainPdfUrl: string = 'http://bitcoineum.com/assets/BitcoineumManifesto.pdf';

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    var canvasBody = (<HTMLCanvasElement>document.getElementById('canvas')),
      canvas = canvasBody.getContext('2d'),

      w = canvasBody.width = window.innerWidth,
      h = canvasBody.height = 762,

      tick = 0,
      opts = {
        canvas: {
          backgroundColor: '#100505',
          fireAmount: w / 35
        },
        fire: {
          height: h / 3,
          sparksAmount: 10,
          speed: 70,
          addedSpeed: 20,
          defaultWidth: 40,

          minWidthIncrement: 40,
          addedWidthIncrement: 20,

          minSparkHeightIncrement: 40,
          addedSparkHeightIncrement: 20
        },
        spark: {
          color: 'hsla(hue,100%,40%,alpha)',
          startSize: 50,
          hueChange: 35
        }
      },
      fires: any = [],
      Fire: any = function (obj: any) {
        this.sparks = [];
        this.x = obj.x;
        this.y = obj.y;
        this.height = h - obj.y;
        this.init = function () {
          this.sparksAmount = Math.floor(obj.sparksAmount);
          this.sizeDecrement = this.height / opts.spark.startSize / 100;

          for (var i = 0; i < this.sparksAmount; i++) {
            this.sparks.push(new Spark({
              x: 0, //relative to the fire
              y: 20, //relative to the fire
              sizeDecrement: this.sizeDecrement,
              xIncrement: opts.fire.minWidthIncrement + Math.random() * opts.fire.addedWidthIncrement,
              yIncrement: h * 3 / opts.fire.minSparkHeightIncrement + Math.random() * opts.fire.addedSparkHeightIncrement,
              delay: 10 * i
            }));
          }
        };
        this.update = function () {
          this.sparks.map(function (Spark: any) {
            Spark.update();
          });
        };
        this.render = function () {
          var coords = [this.x, this.y + this.height];
          this.sparks.map(function (Spark: any) {
            Spark.render(coords[0], coords[1]);
          });
        };

        this.init(obj);
      },
      Spark: any = function (obj: any) {
        this.x = obj.x;
        this.y = obj.y;
        this.delay = obj.delay;
        this.direction = Math.random() < 0.5 ? 1 : -1;
        this.xIncrement = obj.xIncrement;
        this.yIncrement = obj.yIncrement;
        this.sizeDecrement = obj.sizeDecrement;
        this.size = opts.spark.startSize;
        this.phaseTime = opts.fire.speed + Math.random() * opts.fire.addedSpeed;
        this.hueFactor = opts.spark.hueChange / this.phaseTime;
        this.alphaFactor = 1 / this.phaseTime;
        this.time = obj.delay;
        this.pathPoints = [];
        this.color = opts.spark.color;
        this.equation = function () {
          //
        };

        this.update = function () {
          this.size -= this.sizeDecrement;
          this.time > this.phaseTime ? this.restart() : this.time++;
          var r = 360 / this.phaseTime,
            e = r * this.time;
          this.color = opts.spark.color;
          this.color = this.color.replace('hue', 30 - this.hueFactor * this.time);
          this.color = this.color.replace('alpha', 1.25 - this.alphaFactor * this.time);
          this.x = this.equation(e)[0];
          this.y = this.equation(e)[1];
        };

        this.render = function (x: any, y: any) {
          canvas.beginPath();
          canvas.arc(this.x + x, this.y + y, Math.abs(this.size), 0, Math.PI * 2);
          canvas.closePath();
          canvas.fillStyle = this.color;
          canvas.fill();
        };

        this.start = function () {
          this.time = this.delay;
          this.size = opts.spark.startSize;
          this.sizeDecrement = opts.spark.startSize / this.phaseTime;
          this.equation = function (x: any) {
            var X = radians(x);
            return [Math.sin(X) * this.xIncrement * this.direction, -X * this.yIncrement];
          };
        };
        this.restart = function () {
          this.time = 0;
          this.size = opts.spark.startSize;
          this.color = opts.spark.color;
        };
        this.start();
      };
    function radians(deg: any) {
      return deg * (Math.PI / 180);
    }

    function setup() {
      for (var i = 0; i < opts.canvas.fireAmount; i++) {
        fires.push(new Fire({
          x: w / opts.canvas.fireAmount * i,
          y: h - opts.fire.height - Math.random() * (opts.fire.height / 3),
          sparksAmount: opts.fire.sparksAmount + Math.random() * (opts.fire.sparksAmount / 2)
        }));
      }
      fires.map(function (Fire: any) {
        Fire.init();
        Fire.update();
      });
      window.requestAnimationFrame(loop);
    }

    function loop() {
      canvas.fillStyle = opts.canvas.backgroundColor;
      canvas.fillRect(0, 0, w, h);

      tick++;
      fires.map(function (Fire: any) {
        Fire.update();
        Fire.render();
      });
      window.requestAnimationFrame(loop);
    }
    setup();

    window.addEventListener('resize', function () {
      w = canvasBody.width = window.innerWidth;
      h = canvasBody.height = window.innerHeight;
    });
  }

}
