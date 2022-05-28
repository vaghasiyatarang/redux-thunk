// const MENU_DATA = "MENU_DATA";

export const menudata = (data: any) => {
  // console.log(data,"data of menu-------");

  return {
    type: "MENU_DATA",
    payload: data,
  };
};
