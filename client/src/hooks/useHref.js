function useHref(url) {
  const handler = () => {
    window.open(`${url}`, "_blank");
  };
  return handler;
}

export default useHref;
