export class userStory {
    _id: string;
	session_id: string;
    scores_id: string;
	Titulo: string;
	Descripcion: string;
    Scored: boolean;

    constructor () {
        this._id = '';
        this.session_id = '';
        this.scores_id = '';
        this.Titulo = '';
        this.Descripcion = '';
        this.Scored = false;
    }

}