import {
	BATTLE_ASSET_KEYS,
	BATTLE_BACKGROUND_ASSET_KEYS,
	HEALTH_BAR_ASSET_KEYS,
	MONSTER_ASSET_KEYS,
} from '../asstes/asset-keys.js'
import Phaser from '../lib/phaser.js'
import { SCENE_KEYS } from './scene-keys.js'

export class PreloadScene extends Phaser.Scene {
	constructor() {
		super({ key: SCENE_KEYS.PRELOAD_SCENE })
	}

	preload() {
		const monsterTamerAssetPath = 'assets/images/monster-tamer'
		const kennysAssetPath = 'assets/images/kenneys-assets'

		// Battle background
		this.load.image(
			BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
			`${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`
		)

		// Healthbar assets
		this.load.image(
			BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
			`${kennysAssetPath}/ui-space-expansion/custom-ui.png`
		)
		this.load.image(
			HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
			`${kennysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`
		)
		this.load.image(
			HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
			`${kennysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`
		)
		this.load.image(
			HEALTH_BAR_ASSET_KEYS.MIDDLE,
			`${kennysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`
		)

		// Monster assets
		this.load.image(
			MONSTER_ASSET_KEYS.IGUANIGNITE,
			`${monsterTamerAssetPath}/monsters/iguanignite.png`
		)
		this.load.image(
			MONSTER_ASSET_KEYS.CARNODUSK,
			`${monsterTamerAssetPath}/monsters/carnodusk.png`
		)
	}

	create() {
		this.scene.start(SCENE_KEYS.BATTLE_SCENE)
	}
}
