# Database Migration Instructions

## Survey Response Feature

A new database table has been added to store survey responses. Follow these steps to apply the migration:

### Prerequisites
- Ensure your database is accessible
- Verify the `DATABASE_URL` in `.env.local` is correct

### Steps

1. **Run the migration**
   ```bash
   npx prisma migrate dev --name add_survey_response_model
   ```

2. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

3. **Verify the migration**
   ```bash
   npx prisma studio
   ```
   This will open Prisma Studio where you can verify the `SurveyResponse` table exists.

### What was added

The migration adds a new `SurveyResponse` table with the following fields:
- `id` - Unique identifier
- `userId` - Optional foreign key to User (null for anonymous responses)
- `platform` - Which platforms user uses (instagram, tiktok, both)
- `goal` - User's main goal (grow, consistency, engagement, automate)
- `postingFrequency` - How often they post (daily, weekly, occasional)
- `userType` - User category (creator, business, agency, exploring)
- `automationLevel` - Desired automation level (helpers, mostly, full)
- `selectedServices` - JSON array of selected service IDs
- `createdAt` - Timestamp when survey was completed
- `updatedAt` - Timestamp when survey was last updated

### Troubleshooting

If you encounter schema drift errors, you may need to:
1. Review the drift with: `npx prisma migrate status`
2. Resolve conflicts manually or reset: `npx prisma migrate reset` (WARNING: This will delete all data)
3. Re-run the migration

For production deployments, use: `npx prisma migrate deploy`
