export class scoreHistory {
    _id: string;
	scores: Array<any>;
    user_story_id: string;
	final: string;

    constructor () {
        this._id = '';
        this.scores = [];
        this.user_story_id = '';
        this.final = '';
    }

}