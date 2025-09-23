import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { config, database, up } from 'migrate-mongo';

@Injectable()
export class MigrationService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  private getMigrationConfig(): Partial<config.Config> {
    return {
      mongodb: {
        databaseName: this.configService.getOrThrow('DB_NAME'),
        url: this.configService.getOrThrow('DATABASE_URL'),
      },
      migrationsDir: `${__dirname}/../../migrations`,
      changelogCollectionName: 'changelog',
      migrationFileExtension: '.js',
    };
  }

  async onModuleInit() {
    const migrationConfig = this.getMigrationConfig();
    config.set(migrationConfig);

    const { db, client } = await database.connect();
    await up(db, client);
  }
}
