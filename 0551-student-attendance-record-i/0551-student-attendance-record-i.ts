function checkRecord(s: string): boolean {
    if(s.indexOf('A', s.indexOf('A') + 1) > -1) return false;
    if(s.indexOf('LLL') > -1) return false;
    return true;
};