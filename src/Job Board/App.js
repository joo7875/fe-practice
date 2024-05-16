import { Component } from "react";

const PAGE_SIZE = 6;

class App extends Component {
  state = {
    ids: [],
    page: 0,
    jobs: [],
  };

  getJobIds = async () => {
    const ids = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    ).then((res) => res.json());

    this.setState({ ids });

    return ids.slice(0, PAGE_SIZE);
  };

  getJobs = async () => {
    const { ids, page } = this.state;

    let newIds;
    if (!ids || ids.length === 0) newIds = await this.getJobIds();
    else newIds = ids.slice(page, page + PAGE_SIZE);

    const newJobs = await Promise.all(
      newIds.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json()
        )
      )
    );

    this.setState((pre) => ({
      jobs: [...pre.jobs, ...newJobs],
      page: pre.page + PAGE_SIZE,
    }));
  };

  render() {
    const { jobs, ids } = this.state;

    return (
      <div>
        <h2>Hacker News Jobs Board</h2>
        <div>
          {jobs.map(({ id, title, url, by, time }) => (
            <div
              key={id}
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                padding: "10px",
                border: "solid 1px black",
              }}
            >
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
              <div>
                By {by} · {new Date(time * 1000).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        {(jobs.length === 0 || jobs.length < ids.length) && (
          <button onClick={this.getJobs}>Load more jobs</button>
        )}
      </div>
    );
  }
}

export default App;
