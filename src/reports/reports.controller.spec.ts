import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

describe('ReportsController', () => {
  let controller: ReportsController;
  let mockReportsService: Partial<ReportsService>;

  beforeEach(async () => {
    mockReportsService = {
      changeApproval: (id: string, approved: boolean) => {
        return Promise.resolve({
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
        });
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [
        {
          provide: ReportsService,
          useValue: mockReportsService,
        },
      ],
    }).compile();

    controller = module.get<ReportsController>(ReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
