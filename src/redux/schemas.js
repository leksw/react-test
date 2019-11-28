import { schema } from 'normalizr';

// Define a replies schema
export const replay = new schema.Entity('replies');
const replies = [replay];
replay.define({ replies });

// Define your comments schema
const comments = new schema.Entity('comments', {
    replies: [replay]
});

export const commentsList = [comments];
