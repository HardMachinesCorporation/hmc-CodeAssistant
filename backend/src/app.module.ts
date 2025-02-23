import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import CustomConfigLoader from "./custom-config/custom-config.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      // @ts-expect-error the typings are wrong
      load: [CustomConfigLoader],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
