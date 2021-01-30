---
title: JSON .NET for Utility 설치 시 QuickSheet 에서 에러나옴
sidebar_label: JSON .NET for Utility 설치 시 QuickSheet 에서 에러나옴
---

## Newtonsoft.Json 과 QuickSheet 같이 사용하기

[QuickSheet](https://github.com/kimsama/Unity-QuickSheet) 플러그인 안에 `Assets/Plugins/QuickSheet/GDataPlugin/Editor/Google/Newtonsoft.Json.*` 파일이 meta파일 제외하고 4개가 있고, QuickSheet 플러그인은 이 dll파일을 참고해서 구동이 되는데,

그런데 JSON .NET for Utility을 설치했을 때 들어 있는 파일이 `Newtonsoft.Json.*` 파일들이다. QuickSheet플러그인에서 사용하는 파일과 동일한 것이다.

## 상황1. 중복 import이슈

첫 상황은 중복 import이슈로 인해서 나오는 에러다.

```
PrecompiledAssemblyException: **Multiple precompiled assemblies with the same name Newtonsoft.Json.dll included or the current platform. Only one assembly with the same name is allowed per platform**. Assembly paths: 
Assets/JsonDotNet/Assemblies/Standalone/Newtonsoft.Json.dll
Assets/Plugins/QuickSheet/GDataPlugin/Editor/Google/Newtonsoft.Json.dll
UnityEditor.Scripting.ScriptCompilation.PrecompiledAssemblyProvider.ValidateAndGetNameToPrecompiledAssembly (UnityEditor.Scripting.ScriptCompilation.PrecDirtyPrecompiledAssembliesompiledAssembly[] precompiledAssemblies) (at /Users/bokken/buildslave/unity/build/Editor/Mono/Scripting/ScriptCompilation/PrecompiledAssembly.cs:118)
UnityEditor.Scripting.ScriptCompilation.PrecompiledAssemblyProvider.GetPrecompiledAssembliesDictionary (System.Boolean isEditor, UnityEditor.BuildTargetGroup buildTargetGroup, UnityEditor.BuildTarget buildTarget) (at /Users/bokken/buildslave/unity/build/Editor/Mono/Scripting/ScriptCompilation/PrecompiledAssembly.cs:63)
UnityEditor.Scripting.ScriptCompilation.PrecompiledAssemblyProvider.GetPrecompiledAssemblies (System.Boolean isEditor, UnityEditor.BuildTargetGroup buildTargetGroup, UnityEditor.BuildTarget buildTarget) (at /Users/bokken/buildslave/unity/build/Editor/Mono/Scripting/ScriptCompilation/PrecompiledAssembly.cs:52)
UnityEditor.Scripting.ScriptCompilation.EditorCompilation.DirtyPrecompiledAssembly (System.String path) (at /Users/bokken/buildslave/unity/build/Editor/Mono/Scripting/ScriptCompilation/EditorCompilation.cs:440)
UnityEditor.Scripting.ScriptCompilation.EditorCompilation.DirtyPrecompiledAssemblies (System.String[] paths) (at /Users/bokken/buildslave/unity/build/Editor/Mono/Scripting/ScriptCompilation/EditorCompilation.cs:430)
UnityEditor.Scripting.ScriptCompilation.EditorCompilationInterface+<>c__DisplayClass20_0.<DirtyPrecompiledAssemblies>b__0 () (at /Users/bokken/buildslave/unity/build/Editor/Mono/Scripting/ScriptCompilation/EditorCompilationInterface.cs:188)
UnityEditor.Scripting.ScriptCompilation.EditorCompilationInterface.EmitExceptionAsError (System.Action action) (at /Users/bokken/buildslave/unity/build/Editor/Mono/Scripting/ScriptCompilation/EditorCompilationInterface.cs:83)
UnityEditor.Scripting.ScriptCompilation.EditorCompilationInterface:DirtyPrecompiledAssemblies(String[]) (at /Users/bokken/buildslave/unity/build/Editor/Mono/Scripting/ScriptCompilation/EditorCompilationInterface.cs:188)
```

- `Assets/Plugins/QuickSheet/GDataPlugin/Editor/Google/`  에서 Newtonsoft로 시작하는 파일은 다 지운다.

## 상황2. QuickSheet에서 참고하는 Newtonsoft.JSON 버전 맞추기

이후에는 다른 에러가 나온다.

```csharp
Assembly 'Library/ScriptAssemblies/Assembly-CSharp-Editor-firstpass.dll' will not be loaded due to errors:
Reference has errors 'Google.GData.Client'.

Assembly 'Assets/Plugins/QuickSheet/GDataPlugin/Editor/Google/Google.GData.Client.dll' will not be loaded due to errors:
Google.GData.Client references strong named Newtonsoft.Json in a different folder, versions has to match. Assembly references: 4.0.5.0 Found in project: 8.0.0.0.
```

위 에러에서 `Assembly references: 4.0.5.0 Found in project: 8.0.0.0.` 에 주목해서 보도록 한다

[QuickSheet의 이슈보드의 답변](https://github.com/kimsama/Unity-QuickSheet/issues/77#issuecomment-605395587)에서 힌트를 얻었다.

[Newtonsoft.JSON의 4.0.5.0 버전](https://github.com/JamesNK/Newtonsoft.Json/releases/tag/4.0.5)을 찾아서 다운받아 집어넣으면 되는 것이다.

- [Json40r5.zip](http://json40r5.zip) 파일을 다운받는다
- `Json40r5.zip`의 압축을 풀고, Json40r5/Bin/Net35 경로에 있는 파일들을 모두 프로젝트의 Asset폴더 안에다가 붙여 넣으면 문제는 사라진다.