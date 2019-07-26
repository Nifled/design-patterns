interface Command {
  execute: () => void;
  unexecute: () => void;
}

export { Command }
