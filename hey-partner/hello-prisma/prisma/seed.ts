import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Create a sample user
  const hashedPassword = await hash('password123', 10)
  
  const user = await prisma.user.create({
    data: {
      username: 'heypartner_user',
      email: 'user@heypartner.com',
      password: hashedPassword,
      membershipTier: 'PARTNER',
      profile: {
        create: {
          firstName: 'Hey',
          lastName: 'Partner',
          bio: 'Exploring the world of personal concierge services'
        }
      },
      memberships: {
        create: {
          tier: 'PARTNER',
          startDate: new Date(),
          endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        }
      }
    }
  })

  console.log({ user })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.()
  })
