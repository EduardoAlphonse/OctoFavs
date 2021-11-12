export const formatDate = (github_updated_at: string) => {
	let [year, month, day] = github_updated_at.split('-');
	day = day.slice(0, 2);

	return `${day}/${month}/${year}`;
};
