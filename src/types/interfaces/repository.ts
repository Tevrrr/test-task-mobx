import { Owner } from './owner';

export interface Repository {
	id: number;
	name: string;
	full_name: string;
	description: string;
	forks_count: number;
	stargazers_count: number;
	language: string;
	created_at: string;
	updated_at: string;
	archived: false;
	svn_url: string;
	owner: Owner;
}
