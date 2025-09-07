import { faker } from "@faker-js/faker";

export function generateBrandData() {
  return {
    partial1: faker.company.catchPhrase(),
    partial2: faker.company.catchPhrase(),
    paragraph: faker.lorem.paragraph(),
    link: faker.helpers.arrayElement(["Our Process", "Our Identity", "Our Work"]),
  };
}