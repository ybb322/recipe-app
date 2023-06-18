# Endpoints

# ```/auth```

### Sign up

### Sign in

# `````/user`````

### Get all users

### Get user by id

### Update user

### Delete user

# `````/recipe`````

### Get all recipes

### Get recipe by id

### Create / update recipe

### Delete user

###

___

# DTOs

# ```UserDto```

### id: number;

### login: string;

### name?: string;

### surname?: string;

### recipes: RecipeDto[];

### rating: number;

# ```RecipeDto```

### id: number;

### title: string;

### description: string;

### cuisine: string;

### cooking_time: number;

### rating: number;

# ```AuthDto```

### login: string;

### password: string;

### email: string;