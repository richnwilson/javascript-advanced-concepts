// Standard before ES2020 was to preceed private function with underscore(_) to differentiate from public i.e.
class Character_old {
    constructor(name,weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    _attack() {
        return `${this.name} attacks with ${this.weapon}`
    }
}

// This is meant to be a new private class character '#' so that can't override value , but can't get to to work