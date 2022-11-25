export type LaunchType = {
  id: string;
  mission_name: string;
  launch_year?: string;
  rocket?: {
    rocket_type?: string;
    rocket_name?: string;
  };
};

export type LaunchesPastResult = {
  launchesPastResult: {
    data: LaunchType[] | [];
    result: { totalCount: number };
  };
};
