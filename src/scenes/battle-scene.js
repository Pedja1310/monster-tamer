import {
	BATTLE_ASSET_KEYS,
	BATTLE_BACKGROUND_ASSET_KEYS,
	HEALTH_BAR_ASSET_KEYS,
	MONSTER_ASSET_KEYS,
} from "../asstes/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

const BATTLE_MENU_OPTIOS = Object.freeze({
	FIGHT: "FIGHT",
	SWITCH: "SWITCH",
	ITEM: "ITEM",
	FLEE: "FLEE",
});

const BATTLE_UI_TEXT_STYLES = {
	color: "#000",
	fontSize: "30px",
};

export class BattleScene extends Phaser.Scene {
	constructor() {
		super({ key: SCENE_KEYS.BATTLE_SCENE });
	}

	preload() {}

	create() {
		// create main background
		this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0, 0);

		// create monsters
		this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
		this.add.image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true);

		// render health bar
		const playerMonsterName = this.add.text(
			30,
			20,
			MONSTER_ASSET_KEYS.IGUANIGNITE,
			{
				color: "#7e3d3f",
				fontSize: "32px",
			}
		);

		this.add.container(556, 318, [
			this.add
				.image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
				.setOrigin(0),
			playerMonsterName,
			this.#createHealth(34, 34),
			this.add.text(playerMonsterName.width + 35, 23, "L5", {
				color: "#ed474b",
				fontSize: "28px",
			}),
			this.add.text(30, 55, "HP", {
				color: "#ed474b",
				fontSize: "24px",
				fontStyle: "italic",
			}),
			this.add
				.text(443, 80, "25/25", {
					color: "#7e3d3f",
					fontSize: "15px",
				})
				.setOrigin(1, 0),
		]);

		// render health bar
		const enemyMonssterName = this.add.text(
			30,
			20,
			MONSTER_ASSET_KEYS.CARNODUSK,
			{
				color: "#7e3d3f",
				fontSize: "32px",
			}
		);

		this.add.container(0, 0, [
			this.add
				.image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
				.setOrigin(0)
				.setScale(1, 0.8),
			enemyMonssterName,
			this.#createHealth(34, 34),
			this.add.text(enemyMonssterName.width + 35, 23, "L5", {
				color: "#ed474b",
				fontSize: "28px",
			}),
			this.add.text(30, 55, "HP", {
				color: "#ed474b",
				fontSize: "24px",
				fontStyle: "italic",
			}),
		]);

		// render out the main info and sub info panes
		this.#createMainInfoPane();
		this.add.container(520, 448, [
			this.#createMainSubInfoPane(),
			this.add.text(55, 22, BATTLE_MENU_OPTIOS.FIGHT, BATTLE_UI_TEXT_STYLES),
			this.add.text(240, 22, BATTLE_MENU_OPTIOS.SWITCH, BATTLE_UI_TEXT_STYLES),
			this.add.text(55, 70, BATTLE_MENU_OPTIOS.ITEM, BATTLE_UI_TEXT_STYLES),
			this.add.text(240, 70, BATTLE_MENU_OPTIOS.FLEE, BATTLE_UI_TEXT_STYLES),
		]);

		this.add.container(0, 448, [
			this.add.text(55, 22, "slash", BATTLE_UI_TEXT_STYLES),
			this.add.text(240, 22, "grawl", BATTLE_UI_TEXT_STYLES),
			this.add.text(55, 70, "-", BATTLE_UI_TEXT_STYLES),
			this.add.text(240, 70, "-", BATTLE_UI_TEXT_STYLES),
		]);
	}

	#createHealth(x, y) {
		const scaleY = 0.7;

		const leftCap = this.add
			.image(x, y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP)
			.setOrigin(0, 0.5)
			.setScale(1, scaleY);

		const middle = this.add
			.image(leftCap.x + leftCap.width, y, HEALTH_BAR_ASSET_KEYS.MIDDLE)
			.setOrigin(0, 0.5)
			.setScale(1, scaleY);
		middle.displayWidth = 360;

		const rightCap = this.add
			.image(middle.x + middle.displayWidth, y, HEALTH_BAR_ASSET_KEYS.RIGHT_CAP)
			.setOrigin(0, 0.5)
			.setScale(1, scaleY);

		return this.add.container(x, y, [leftCap, middle, rightCap]);
	}

	#createMainInfoPane() {
		const padding = 4;
		const rectHeight = 124;

		this.add
			.rectangle(
				0,
				this.scale.height - rectHeight - padding,
				this.scale.width - padding * 2,
				rectHeight,
				0xede4f3,
				1
			)
			.setOrigin(0)
			.setStrokeStyle(8, 0xe4434a, 1);
	}

	#createMainSubInfoPane() {
		const rectWidth = 500;
		const rectHeight = 124;

		return this.add
			.rectangle(0, 0, rectWidth, rectHeight, 0xede4f3, 1)
			.setOrigin(0)
			.setStrokeStyle(8, 0x905ac2, 1);
	}
}
