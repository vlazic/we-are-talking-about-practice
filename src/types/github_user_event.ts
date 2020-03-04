export interface IGithubUserEventActor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface IGithubUserEventRepo {
  id: number;
  name: string;
  url: string;
}

export interface IGithubUserEventAuthor {
  email: string;
  name: string;
}

export interface IGithubUserEventCommit {
  sha: string;
  author: IGithubUserEventAuthor;
  message: string;
  distinct: boolean;
  url: string;
}

export interface IGithubUserEventPayload {
  push_id: any;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: IGithubUserEventCommit[];
  ref_type: string;
  master_branch: string;
  description: string;
  pusher_type: string;
  action: string;
}

export interface IGithubUserEventOrg {
  id: number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface IGithubUserEvent {
  id: string;
  type: string;
  actor: IGithubUserEventActor;
  repo: IGithubUserEventRepo;
  payload: IGithubUserEventPayload;
  public: boolean;
  created_at: string;
  org: IGithubUserEventOrg;
}
