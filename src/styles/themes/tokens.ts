export type ColorsProps = {
    blue: string;
    baseTitle: string;
    baseSubtitle: string;
    baseText: string;
    baseSpan: string;
    baseLabel: string;
    baseBorder: string;
    basePost: string;
    baseProfile: string;
    baseBackground: string;
    baseInput: string;
}

export type FontsProps = {
    font1: string;
    font2: string;
    font3: string;
    font4: string;
    font5: string;
    font6: string;
}
 const colorsTheme: ColorsProps = {
    blue: '#3294F8',
    baseTitle: '#E7EDF4',
    baseSubtitle: '#C4D4E3',
    baseText: '#AFC2D4',
    baseSpan: '#7B96B2',
    baseLabel: '#3A536B',
    baseBorder: '#1C2F41',
    basePost: '#112131',
    baseProfile: '#0B1B2B',
    baseBackground: '#071422',
    baseInput: '#040F1A',

} 

const fontTheme: FontsProps = {
    font1: '12px',
    font2: '14px',
    font3: '16px',
    font4: '18px',
    font5: '20px',
    font6 :'24px'
}

export const defaultTheme = {
    colorsTheme,
    fontTheme
}