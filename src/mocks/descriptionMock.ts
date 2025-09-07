import { faker } from "@faker-js/faker";

export function generateDescriptionData() {
  return {
    firstHeader: faker.helpers.arrayElement([
      "BRAND, DEV, ECOM, MARKETING",
      "DESIGN, STRATEGY, CONTENT, GROWTH",
      "UI/UX, MOBILE, CLOUD, ANALYTICS",
    ]),
    partial1: "We unleash",
    partial2: faker.company.catchPhrase(),
    paragraph: faker.lorem.paragraph(),
    link: faker.helpers.arrayElement(["Let's Talk", "Contact Us", "Get Started"]),
  };
}