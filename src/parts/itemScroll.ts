import { MyObject3D } from "../webgl/myObject3D";
import { Mesh } from 'three/src/objects/Mesh';
import { Util } from "../libs/util";
import { DoubleSide } from 'three/src/constants';
import { MeshToonMaterial } from 'three/src/materials/MeshToonMaterial';
import { BoxGeometry } from 'three/src/geometries/BoxGeometry';
import { HSL } from "../libs/hsl";

export class itemScroll extends MyObject3D {

  private _mesh:Mesh;
  private _mesh2:Mesh;

  constructor(opt:any) {
    super()

    let col = opt.col;
    const hsl = new HSL();
    col.getHSL(hsl);
    hsl.l *= 1.5;
    col = col.setHSL(hsl.h, hsl.s, hsl.l);

    const geo = new BoxGeometry(1,1,1);

    this._mesh = new Mesh(
      geo,
      new MeshToonMaterial({
        color: col,
        gradientMap:null,
        transparent:true,
        side:DoubleSide,
        depthTest:true,
      })
    );
    this.add(this._mesh);

    this._mesh2 = new Mesh(
      geo,
      new MeshToonMaterial({
        color: col,
        gradientMap:null,
        transparent:true,
        side:DoubleSide,
        depthTest:true,
      })
    );
    this.add(this._mesh2);
  }


  public setSize(w:number, h:number, d:number):void {
    this._mesh.scale.set(w, h, d);
    this._mesh2.scale.set(w, h, d);
    this._mesh2.rotation.z = Util.instance.radian(90);
  }


  protected _update():void {
    super._update();
  }


  protected _resize(): void {
    super._resize();
  }
}