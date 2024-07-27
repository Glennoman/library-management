import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';

describe('BookService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BookService],
    }).compile();

    service = module.get(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
