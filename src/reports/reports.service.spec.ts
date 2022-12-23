import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const reportArray = [
  {
    id: 1,
    price: 5000,
    lat: 10,
    lng: 10,
    make: 'Toyota',
    model: 'Corolla',
    year: 2005,
    approved: true,
    mileage: 2000,
    user: {
      id: 1,
      email: 'test@test.com',
      password: 'testpass',
      admin: true,
      reports: [],
    },
  },
];

describe('ReportsService', () => {
  let service: ReportsService;
  let repo: Repository<Report>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        {
          provide: getRepositoryToken(Report),
          useValue: {
            find: jest.fn().mockResolvedValue(reportArray),
          },
        },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
    repo = module.get<Repository<Report>>(getRepositoryToken(Report));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
