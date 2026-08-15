/**
 * This utility class provides methods to generate fake data using the Faker library.
 * It can be used to create realistic test data for various fields such as names, emails, addresses, etc.
 */

import {faker} from '@faker-js/faker';

export class FakerDataUtil {
  static generateFirstName(): string {
    return faker.person.firstName();
  }

  static generateLastName(): string {
    return faker.person.lastName();
  }

  static generateEmail(): string {
    return faker.internet.email();
  }

  static generatePhoneNumber(): string {
    return faker.phone.number();
  }

  static generateCompany(): string {
    return faker.company.name();
  }

  static generatePostalCode(): string {
    return faker.location.zipCode();
  }
} 