type Props = {
  authorName: String;
};

const Avatar = ({ authorName }: Props) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {authorName.split(" ")[0][0].toUpperCase() +
          "" +
          authorName.split(" ")[0][1].toUpperCase()}
      </span>
    </div>
  );
};

export default Avatar;
