const rtf = new Intl.RelativeTimeFormat('pt-Br', { style: 'short' }); 

function convertMalissecondsToDays(date1: number, date2: number): number {
    const milesseconds = date1 - date2
    const daysGap = Math.round(milesseconds / (1000 * 60 * 60 * 24));

    return daysGap;
}

export function formatterDate(currentDate: string) {
    const date1 = new Date(currentDate);
    const date2 = new Date();

    return rtf.format(convertMalissecondsToDays(Number(date1), Number(date2)), 'days');
}