
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



const createMemberIntoDB = async (memberData: any) => {
  const result = await prisma.member.create({
    data: {
      ...memberData,  
     
    }
  });
  return result;
};

const RetrievesAllMembersFromDB = async () => {
  const result = await prisma.member.findMany({});
  return result;
};

const fetchSingleMemberByIdFromDB = async (id: string) => {
  try {
    const result = await prisma.member.findUniqueOrThrow({
      where: {
        memberId: id,
      },
    });
    return result;
  } catch (error) {
    // Handle the error here (optional)
    throw new Error("Member not found or some other error occurred");
  }
};

const MemberUpdatesByIdFromDB = async (id: string, memberData: any) => {
  const result = await prisma.member.update({
    where: {
      memberId: id,
    },
    data: memberData,
  });
  return result;
};

const MemberDeletesByIdFromDB = async (id: string) => {
  const result = await prisma.member.delete({
    where: {
      memberId: id,
    },
  });
  return result;
}


export const memberService = {
  createMemberIntoDB,
  RetrievesAllMembersFromDB,
  fetchSingleMemberByIdFromDB,
  MemberUpdatesByIdFromDB,
  MemberDeletesByIdFromDB,
};
