export class User  {
	
private _firstName: string;
private _lastName: 	string;

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get fullName(): string {
		return this._firstName +' '+this._lastName;
	}

	get firstName(): string {
		return this._firstName;
	}

	get lastName(): string {
		return this._lastName;
	}

	set firstName(newName: string) {
		this._firstName = newName;
	}

	set lastName(newName: string) {
		this._lastName = newName;
	}
}
