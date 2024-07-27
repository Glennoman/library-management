import { Test, TestingModule } from '@nestjs/testing';
import { AuthorService } from './author.service';

describe('AuthorService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthorService],
    }).compile();

    service = module.get(AuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
