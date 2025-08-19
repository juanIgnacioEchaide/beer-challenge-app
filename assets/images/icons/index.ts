export const Icons = {
    Profile: require("@/assets/images/icons/profile.jpg"),
    Beer: require("@/assets/images/icons/Beer.png"),
    Budweiser: require("@/assets/images/icons/budweiser.png"),
    Corona: require("@/assets/images/icons/corona.png"),
    IconBag: require("@/assets/images/icons/icon-bag.png"),
    MenuIcon: require("@/assets/images/icons/menu-icon.png"),
    MillerLite: require("@/assets/images/icons/miller lite.png"),
    ModeloEspecial: require("@/assets/images/icons/modelo-especial.png"),
    Star1: require("@/assets/images/icons/Star 1.png"),
    WineGlass: require("@/assets/images/icons/Wine-glass.png"),
} as const;

export type IconName = keyof typeof Icons;