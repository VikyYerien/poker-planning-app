export class team {
    _id: string;
	session_id: string;
	user_id_master: string;
	users_ids: string[];

    constructor () {
        this._id = '';
        this. session_id = '';
        this. user_id_master = '';
        this.users_ids = [];
    }

}