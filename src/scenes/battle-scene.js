import {
	BATTLE_ASSET_KEYS,
	BATTLE_BACKGROUND_ASSET_KEYS,
	HEALTH_BAR_ASSET_KEYS,
	MONSTER_ASSET_KEYS,
} from "../asstes/asset-keys.js";
import { BattleMenu } from "../battle/ui/menu/battle-menu.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class BattleScene extends Phaser.Scene {
	#battleMenu;

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
		const playerMonsterName = this.add.text(30, 20, MONSTER_ASSET_KEYS.IGUANIGNITE, {
			color: "#7e3d3f",
			fontSize: "32px",
		});

		this.add.container(556, 318, [
			this.add.image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND).setOrigin(0),
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
		const enemyMonssterName = this.add.text(30, 20, MONSTER_ASSET_KEYS.CARNODUSK, {
			color: "#7e3d3f",
			fontSize: "32px",
		});

		this.add.container(0, 0, [
			this.add.image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND).setOrigin(0).setScale(1, 0.8),
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
		this.#battleMenu = new BattleMenu(this);
		this.#battleMenu.showMainBattleMenu();
	}

	#createHealth(x, y) {
		const scaleY = 0.7;

		const leftCap = this.add.image(x, y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP).setOrigin(0, 0.5).setScale(1, scaleY);

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
}
