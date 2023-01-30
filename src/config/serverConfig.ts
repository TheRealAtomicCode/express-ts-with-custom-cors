import cors from 'cors';

export default function serverConfig(expressApp) {
  const whitelist = [process.env.FRONEND_WEBAPP, process.env.FRONEND_MOBILEAPP];

  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

  expressApp.use(cors(corsOptions));
}
