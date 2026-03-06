function useLocalStorage({ nameAdd }) {
  // daily-goals - longTrem-goals - user
  const item = JSON.parse(localStorage.getItem(nameAdd));

  return [item];
}

export default useLocalStorage;
