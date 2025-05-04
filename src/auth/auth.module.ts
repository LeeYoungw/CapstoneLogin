import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from '../entity/user.entity';
import { Building } from '../entity/building.entity'; // 상대 경로 수정

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Building]), // 👈 Building 추가
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

