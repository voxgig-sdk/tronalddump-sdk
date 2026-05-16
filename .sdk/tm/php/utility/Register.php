<?php
declare(strict_types=1);

// Tronalddump SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TronalddumpUtility::setRegistrar(function (TronalddumpUtility $u): void {
    $u->clean = [TronalddumpClean::class, 'call'];
    $u->done = [TronalddumpDone::class, 'call'];
    $u->make_error = [TronalddumpMakeError::class, 'call'];
    $u->feature_add = [TronalddumpFeatureAdd::class, 'call'];
    $u->feature_hook = [TronalddumpFeatureHook::class, 'call'];
    $u->feature_init = [TronalddumpFeatureInit::class, 'call'];
    $u->fetcher = [TronalddumpFetcher::class, 'call'];
    $u->make_fetch_def = [TronalddumpMakeFetchDef::class, 'call'];
    $u->make_context = [TronalddumpMakeContext::class, 'call'];
    $u->make_options = [TronalddumpMakeOptions::class, 'call'];
    $u->make_request = [TronalddumpMakeRequest::class, 'call'];
    $u->make_response = [TronalddumpMakeResponse::class, 'call'];
    $u->make_result = [TronalddumpMakeResult::class, 'call'];
    $u->make_point = [TronalddumpMakePoint::class, 'call'];
    $u->make_spec = [TronalddumpMakeSpec::class, 'call'];
    $u->make_url = [TronalddumpMakeUrl::class, 'call'];
    $u->param = [TronalddumpParam::class, 'call'];
    $u->prepare_auth = [TronalddumpPrepareAuth::class, 'call'];
    $u->prepare_body = [TronalddumpPrepareBody::class, 'call'];
    $u->prepare_headers = [TronalddumpPrepareHeaders::class, 'call'];
    $u->prepare_method = [TronalddumpPrepareMethod::class, 'call'];
    $u->prepare_params = [TronalddumpPrepareParams::class, 'call'];
    $u->prepare_path = [TronalddumpPreparePath::class, 'call'];
    $u->prepare_query = [TronalddumpPrepareQuery::class, 'call'];
    $u->result_basic = [TronalddumpResultBasic::class, 'call'];
    $u->result_body = [TronalddumpResultBody::class, 'call'];
    $u->result_headers = [TronalddumpResultHeaders::class, 'call'];
    $u->transform_request = [TronalddumpTransformRequest::class, 'call'];
    $u->transform_response = [TronalddumpTransformResponse::class, 'call'];
});
