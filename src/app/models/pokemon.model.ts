export class BaseClass {
  name: string;
  url: string;

  constructor(name: string, url: string) {
      this.name = name;
      this.url = url;
  }
}

export class Pokemon {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  weight: number;
  details: any;
  types: Types [];
  stats: Stats [];
  sprites: Sprites;
  url: string;
  moves: Moves [];
  abilities: Abilities [];

  constructor(id: number, name: string, baseExperience: number, height: number,
    weight: number, details: any, types: Types[], stats: Stats [], sprites: Sprites, url: string, moves: Moves [], abilities: Abilities [])  {
    this.id = id;
    this.name = name;
    this.baseExperience = baseExperience;
    this.height = height;
    this.weight = weight;
    this.details = details;
    this.types = types;
    this.stats = stats;
    this.sprites = sprites;
    this.url = url;
    this.moves = moves;
    this.abilities = abilities;
  }
}

export class Types {
  slot: number;
  type: BaseClass ;

  constructor(slot: number, type: BaseClass ) {
      this.slot = slot;
      this.type = type;
  }
}

export class Stats {
  base_stat: number;
  effort: number;
  stat: BaseClass;

  constructor(base_stat: number, effort: number, stat: BaseClass) {
      this.base_stat = base_stat;
      this.effort = effort;
      this.stat = stat;
  }
}

export class Sprites {
  default: string;
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  official_artwork: OfficialArtwork;

  constructor(back_default: string, back_shiny: string, front_default: string, front_shiny: string, official_artwork: OfficialArtwork, defaultSprite: string) {
      this.back_default = back_default;
      this.back_shiny = back_shiny;
      this.front_default = front_default;
      this.front_shiny = front_shiny;
      this.official_artwork = official_artwork;
      this.default = defaultSprite;
  }
}

export class OfficialArtwork {
  front_default: string;
  front_shiny: string;

  constructor(front_default: string, front_shiny: string) {
      this.front_default = front_default;
      this.front_shiny = front_shiny;
  }
}

export class Moves {
  move: BaseClass;

  constructor(move: BaseClass) {
      this.move = move;
  }
}

export class Abilities {
  is_hidden: boolean;
  slot: number;
  ability: BaseClass;

  constructor(is_hidden: boolean, slot: number, ability: BaseClass) {
      this.is_hidden = is_hidden;
      this.slot = slot;
      this.ability = ability;
  }
}

export enum PokemonType {
  fire = 'linear-gradient(90deg, #F08030 0%, #FFB570 100%)',
  water = 'linear-gradient(90deg, #6890F0 0%, #9CB6FF 100%)',
  grass = 'linear-gradient(90deg, #78C850 0%, #A0E078 100%)',
  poison = 'linear-gradient(90deg, #A040A0 0%, #D08AD0 100%)',
  bug = 'linear-gradient(90deg, #AABB22 0%, #DDFF88 100%)',
  fairy = 'linear-gradient(90deg, #EE99EE 0%, #FFC0FF 100%)',
  ground = 'linear-gradient(90deg, #DDBB55 0%, #EEDD88 100%)',
  steel = 'linear-gradient(90deg, #AAAABB 0%, #DDDDFF 100%)',
  fighting = 'linear-gradient(90deg, #BB5544 0%, #DD8877 100%)',
  normal = 'linear-gradient(90deg, #AAAA99 0%, #DDDDCC 100%)',
  psychic = 'linear-gradient(90deg, #F85888 0%, #FFB3C2 100%)',
  flying = 'linear-gradient(90deg, #A890F0 0%, #D6C6FF 100%)',
  ice = 'linear-gradient(90deg, #98D8D8 0%, #CCEEEE 100%)',
  electric = 'linear-gradient(90deg, #F8D030 0%, #FFEB80 100%)',
  dark = 'linear-gradient(90deg, #705848 0%, #A08A78 100%)',
  dragon = 'linear-gradient(90deg, #7038F8 0%, #B080FF 100%)',
  ghost = 'linear-gradient(90deg, #705898 0%, #A085C8 100%)',
  rock = 'linear-gradient(90deg, #B8A038 0%, #D6C781 100%)'
}

export class MoveDetails {
  name: string;
  id: number;
  accuracy: number;
  pp: number;
  power: number;
  type: BaseClass;

  constructor(name: string, id: number, accuracy: number, pp: number, power: number, type: BaseClass) {
      this.name = name;
      this.id = id;
      this.accuracy = accuracy;
      this.pp = pp;
      this.power = power
      this.type = type;
  }
}

export class AbilitiesDetails {
  id: number;
  effect_entries: EffectionDescription [];
  generation: BaseClass;
  name: string;
  pokemon: PokeAbility [];

  constructor(id: number, name: string, generation: BaseClass, effect_entries : EffectionDescription [], pokemon: PokeAbility[]) {
      this.id = id;
      this.name = name;
      this.generation = generation;
      this.effect_entries = effect_entries;
      this.pokemon = pokemon;
  }
}

export class EffectionDescription {
  effect: string;
  short_effect: string;
  language: BaseClass;

  constructor(effect: string, short_effect: string, language: BaseClass) {
      this.effect = effect;
      this.short_effect = short_effect;
      this.language = language;
  }
}
export class PokeAbility {
  is_hidden: boolean;
  pokemon: BaseClass;

  constructor(is_hidden: boolean, pokemon: BaseClass) {
      this.is_hidden = is_hidden;
      this.pokemon = pokemon;
  }
}
