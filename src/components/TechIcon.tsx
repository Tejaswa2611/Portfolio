interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon = ({ name, className = "w-6 h-6" }: TechIconProps) => {
  const getImagePath = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    // Map technology names to image files
    const techMapping: Record<string, string> = {
      'react': '/assets/skills/react.png',
      'react.js': '/assets/skills/react.png',
      'next.js': '/assets/skills/nextjs.svg',
      'next': '/assets/skills/nextjs.svg',
      'javascript': '/assets/skills/JS.png',
      'typescript': '/assets/skills/Ts.png',
      'ts': '/assets/skills/Ts.png',
      'python': '/assets/skills/Python.png',
      'node.js': '/assets/skills/node.png',
      'node': '/assets/skills/node.png',
      'express.js': '/assets/skills/node.png',
      'express': '/assets/skills/node.png',
      'html': '/assets/skills/html.png',
      'css': '/assets/skills/css.png',
      'mongodb': '/assets/skills/mongodb.png',
      'mysql': '/assets/skills/mysql.png',
      'postgresql': '/assets/skills/postgresql.png',
      'postgres': '/assets/skills/postgresql.png',
      'redis': '/assets/skills/redis.png',
      'figma': '/assets/skills/figma.png',
      'graphql': '/assets/skills/graphql.png',
      'c++': '/assets/skills/C++.png',
      'cpp': '/assets/skills/C++.png',
      'kotlin': '/assets/skills/Kotlin.png',
      'dart': '/assets/skills/Dart.jpeg',
      'flutter': '/assets/skills/Flutter.png',
      'jetpack compose': '/assets/skills/jetpack compose.png',
      'compose': '/assets/skills/jetpack compose.png',
      'android': '/assets/skills/android.jpg',
      'aws': '/assets/skills/AWS.png',
      'aws lambda': '/assets/skills/lamda.webp',
      'lambda': '/assets/skills/lamda.webp',
      'docker': '/assets/skills/docker.png',
      'firebase': '/assets/skills/Firebase.png',
      'gcp': '/assets/skills/GCP.png',
      'google cloud': '/assets/skills/GCP.png',
      'prisma': '/assets/skills/prisma.png',
      'deepseek': '/assets/skills/deepseek.jpg',
      'tailwind': '/assets/skills/tailwind.png',
      'openai': '/assets/skills/openai.webp',
      'dsa': '/assets/skills/DSA.png',
      'database': '/assets/skills/database.svg',
      'iitk': '/assets/institutions/iitk-logo white.png',
      'git': '/assets/skills/git.png',
    };

    // Find exact match first
    if (techMapping[techLower]) {
      return techMapping[techLower];
    }

    // Find partial match
    for (const [key, path] of Object.entries(techMapping)) {
      if (techLower.includes(key) || key.includes(techLower)) {
        return path;
      }
    }

    return null;
  };

  const getDefaultIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    // Fallback to emojis for technologies without images
    if (techLower.includes('next')) return '▲';
    if (techLower.includes('vue')) return '💚';
    if (techLower.includes('angular')) return '🅰️';
    if (techLower.includes('tailwind')) return '💨';
    if (techLower.includes('prisma')) return '🔺';
    if (techLower.includes('deepseek')) return '🤖';
    if (techLower.includes('openai')) return '🧠';
    if (techLower.includes('dsa')) return '🔗';
    if (techLower.includes('database')) return '🗄️';
    if (techLower.includes('iitk')) return '🎓';
    if (techLower.includes('flutter')) return '🦋';
    if (techLower.includes('express')) return '🚂';
    if (techLower.includes('django')) return '🐍';
    if (techLower.includes('flask')) return '🍶';
    if (techLower.includes('spring')) return '🌱';
    if (techLower.includes('laravel')) return '🔴';
    if (techLower.includes('aws') || techLower.includes('lambda')) return '☁️';
    if (techLower.includes('serverless')) return '⚡';
    if (techLower.includes('postgresql') || techLower.includes('postgres')) return '🐘';
    if (techLower.includes('mysql')) return '🐬';
    if (techLower.includes('redis')) return '🔴';
    if (techLower.includes('firebase')) return '🔥';
    if (techLower.includes('supabase')) return '⚡';
    if (techLower.includes('java')) return '☕';
    if (techLower.includes('go')) return '🔵';
    if (techLower.includes('rust')) return '🦀';
    if (techLower.includes('php')) return '🐘';
    if (techLower.includes('docker')) return '🐳';
    if (techLower.includes('kubernetes') || techLower.includes('k8s')) return '☸️';
    if (techLower.includes('git')) return '📊';
    if (techLower.includes('github')) return '🐙';
    if (techLower.includes('gitlab')) return '🦊';
    if (techLower.includes('vercel')) return '▲';
    if (techLower.includes('netlify')) return '🌐';
    if (techLower.includes('gcp') || techLower.includes('google cloud')) return '☁️';
    if (techLower.includes('azure')) return '☁️';
    if (techLower.includes('dialogflow')) return '🤖';
    if (techLower.includes('google apps script')) return '📝';
    if (techLower.includes('s3')) return '🪣';
    
    return '🔧';
  };

  const imagePath = getImagePath(name);

  if (imagePath) {
    return (
      <img 
        src={imagePath}
        alt={name}
        className={`${className} object-contain transition-transform hover:scale-110 rounded`}
        title={name}
        onError={(e) => {
          // Fallback to emoji if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="inline-flex items-center justify-center ${className} text-lg transition-transform hover:scale-110" title="${name}">${getDefaultIcon(name)}</span>`;
          }
        }}
      />
    );
  }

  return (
    <span 
      className={`inline-flex items-center justify-center ${className} text-lg transition-transform hover:scale-110`}
      title={name}
    >
      {getDefaultIcon(name)}
    </span>
  );
};

export default TechIcon;
