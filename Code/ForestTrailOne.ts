export { ForestTrailOne };

import Engineer from "./Engineer";
import { Player } from "./Player";
import { Movement } from "./Movement";
import { ParticleSystemMaterial, Vertex } from "three";
import { Dialog } from "./Dialog";
import { Curio } from "./Curio";
import { GameScene } from "./GameScene";

import { Wolf } from "./Characters/Wolf";
import { Rabbit } from "./Characters/Rabbit";
import { Transition } from "./Transition";

class ForestTrailOne extends GameScene
{
    private _Wolf:Wolf;
    private _Rabbit:Rabbit;
    private _Signpost:Transition;
    public constructor()
    {
        super();
        this.Name = "Route1";
        this.Init();
    }
    public Init(): void
    {
        this._Curio = [];
        this._Movement = new Movement(this);

        this._Player = new Player(this);
        this._Player.Trans.Scale = new Engineer.Vertex(279, 333, 1);
        this._Player.Trans.Translation = new Engineer.Vertex(200, 780, 1);

        this._Dialog = new Dialog();

        this._Wolf = new Wolf();
        this._Wolf.Init(new Engineer.Vertex(2600, 770, 0.8), new Engineer.Vertex(600, 360, 1));

        this._Rabbit = new Rabbit();
        this._Rabbit.Flip();
        this._Rabbit.Data["Chat"] = 0;
        this._Rabbit.Init(new Engineer.Vertex(5100, 680, 0.8), new Engineer.Vertex(300, 300, 1));

        this._Signpost = new Transition(null, "Signpost", "Camp1", "Lower Tournament Camp");
        this._Signpost.Init(new Engineer.Vertex(5500, 680, 0.7));
        
        this.BackColor = Engineer.Color.FromRGBA(0, 0, 0, 255);
        this.GenerateBackground();
        this.AddSceneObject(this._Wolf);
        this.AddSceneObject(this._Rabbit);
        this.AddSceneObject(this._Player);
        this.AddSceneObject(this._Signpost);
    }
    private GenerateBackground() : void
    {
        let Backs:Engineer.ImageCollection = new Engineer.ImageCollection(null, ["Resources/Textures/ForestTrailOne.png"]);
        let Back:Engineer.Tile = new Engineer.Tile();
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Trans.Scale = new Engineer.Vertex(5760, 1080, 1);
        Back.Trans.Translation = new Engineer.Vertex(2800, 540, 0);
        this._Background = Back;
        this.AddSceneObject(this._Background);
    }
}