import { MONSTER_ASSET_KEYS } from "../../../asstes/asset-keys.js";

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

export class BattleMenu {
	/** @type {Phaser.Scene} */
	#scene;
	/** @type {Phaser.GameObjects.Container} */
	#mainBattleMenuPhaserContainerGameObject;
	/** @type {Phaser.GameObjects.Container} */
	#moveSelectionSubBattleMenuPhaserContainerGameObject;
	/** @type {Phaser.GameObjects.Text} */
	#battleTextGameObjectLine1;
	/** @type {Phaser.GameObjects.Text} */
	#battleTextGameObjectLine2;

	/** @param {Phaser.Scene} scene Phaser 3 scene where battle menu will be added. */
	constructor(scene) {
		this.#scene = scene;

		this.#createMainInfoPane();
		this.#createMainBattleMenu();
		this.#createMonsterAttackSubMenu();
	}

	showMainBattleMenu() {
		this.#battleTextGameObjectLine1.setText("what should");
		this.#mainBattleMenuPhaserContainerGameObject.setAlpha(1);
		this.#battleTextGameObjectLine1.setAlpha(1);
		this.#battleTextGameObjectLine2.setAlpha(1);
	}

	hideMainBattleMenu() {
		this.#mainBattleMenuPhaserContainerGameObject.setAlpha(0);
		this.#battleTextGameObjectLine1.setAlpha(0);
		this.#battleTextGameObjectLine2.setAlpha(0);
	}

	showMonsterAttackSubMenu() {
		this.#moveSelectionSubBattleMenuPhaserContainerGameObject.setAlpha(1);
	}

	hideMonsterAttackSubMenu() {
		this.#moveSelectionSubBattleMenuPhaserContainerGameObject.setAlpha(0);
	}

	#createMainBattleMenu() {
		this.#battleTextGameObjectLine1 = this.#scene.add.text(20, 460, "what should", BATTLE_UI_TEXT_STYLES);
		//TODO: update to use monster data that is passed to this class
		this.#battleTextGameObjectLine2 = this.#scene.add.text(
			20,
			512,
			`${MONSTER_ASSET_KEYS.IGUANIGNITE} do next?`,
			BATTLE_UI_TEXT_STYLES
		);

		this.#mainBattleMenuPhaserContainerGameObject = this.#scene.add.container(520, 448, [
			this.#createMainSubInfoPane(),
			this.#scene.add.text(55, 22, BATTLE_MENU_OPTIOS.FIGHT, BATTLE_UI_TEXT_STYLES),
			this.#scene.add.text(240, 22, BATTLE_MENU_OPTIOS.SWITCH, BATTLE_UI_TEXT_STYLES),
			this.#scene.add.text(55, 70, BATTLE_MENU_OPTIOS.ITEM, BATTLE_UI_TEXT_STYLES),
			this.#scene.add.text(240, 70, BATTLE_MENU_OPTIOS.FLEE, BATTLE_UI_TEXT_STYLES),
		]);

		this.hideMainBattleMenu();
	}

	#createMonsterAttackSubMenu() {
		this.#moveSelectionSubBattleMenuPhaserContainerGameObject = this.#scene.add.container(0, 448, [
			this.#scene.add.text(55, 22, "slash", BATTLE_UI_TEXT_STYLES),
			this.#scene.add.text(240, 22, "grawl", BATTLE_UI_TEXT_STYLES),
			this.#scene.add.text(55, 70, "-", BATTLE_UI_TEXT_STYLES),
			this.#scene.add.text(240, 70, "-", BATTLE_UI_TEXT_STYLES),
		]);

		this.hideMonsterAttackSubMenu();
	}

	#createMainInfoPane() {
		const padding = 4;
		const rectHeight = 124;

		this.#scene.add
			.rectangle(
				0,
				this.#scene.scale.height - rectHeight - padding,
				this.#scene.scale.width - padding * 2,
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

		return this.#scene.add
			.rectangle(0, 0, rectWidth, rectHeight, 0xede4f3, 1)
			.setOrigin(0)
			.setStrokeStyle(8, 0x905ac2, 1);
	}
}
