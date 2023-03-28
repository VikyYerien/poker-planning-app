export class scoreHistory {
    _id: string;
	scores: Array<any>;
    user_story_id: string;

    constructor () {
        this._id = '';
        this.scores = [];
        this.user_story_id = '';
    }

}