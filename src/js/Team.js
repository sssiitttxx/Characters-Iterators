class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.add(character);
  }
  [Symbol.iterator]() {
    const characters = [...this.members];
    let index = 0;
    return {
      next() {
        if (index < characters.length) {
          return { value: characters[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const team = new Team();
team.add({ name: "A" });
team.add({ name: "B" });
team.add({ name: "C" });

for (const x of team) {
  console.log(x.name);
}

console.log([...team].length);
