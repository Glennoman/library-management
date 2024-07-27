import { Test, TestingModule } from '@nestjs/testing';
import { AuthorController } from './author.controller';

describe('AuthorController', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [AuthorController],
    }).compile();

    controller = module.get(AuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
