import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 20 });

const collection = User.buildUserCollection();

collection.fetch();
