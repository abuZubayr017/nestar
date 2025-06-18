import { ObjectId } from 'bson';

export const availabeAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberView', 'memberRank'];

export const shapeIntoMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
